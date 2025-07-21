// utils/deleteAgency.js
'use server'

import User from '../models/User'
import connect from './db'

export async function deleteAdmin(email) {
  try {
    // Find the user by email
    await connect()
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error(`User with email ${email} not found`)
    }

    // Delete the user
    await User.deleteOne({ _id: user._id })

    return { success: true, message: 'User deleted successfully' }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}