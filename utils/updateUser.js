// app/actions.js
'use server'

import User from '../models/User'
import bcrypt from 'bcrypt'
import connect from './db'

export async function updateUserEmailAndPassword(userId, currentPassword, updatedEmail, newPassword) {
  try {
    await connect()
    // Find the user by ID
    const user = await User.findById(userId)

    if (!user) {
      throw new Error(`User with ID ${userId} not found`)
    }

    // Check if the current password is correct
    const isPasswordCorrect = await bcrypt.compare(currentPassword, user.hashedPassword)

    if (!isPasswordCorrect) {
      throw new Error('Current password is incorrect')
    }

    // Update the email
    user.email = updatedEmail || user.email

    // Update the password if a new password is provided
    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      user.hashedPassword = hashedPassword
    }

    // Save the updated user
    const updatedUser = await user.save()

    return { success: true, message: 'User updated successfully', updatedUser }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}