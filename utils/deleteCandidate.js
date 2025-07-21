// app/actions.js
'use server'

import { revalidatePath } from 'next/cache'
import Candidate from '../models/Candidate'
import User from '../models/User'
import connect from './db'

export async function deleteCandidate(candidateId) {
  try {
    await connect()
    // Find the candidate by ID
    const candidate = await Candidate.findById(candidateId)

    if (!candidate) {
      throw new Error(`Candidate with ID ${candidateId} not found`)
    }

    // Find the associated user
    const associatedUser = await User.findById(candidate.userid)

    if (!associatedUser) {
        await Candidate.deleteOne({ _id: candidate._id })
      throw new Error(`User associated with candidate ${candidateId} not found`)
    }

    // Delete the candidate
    await Candidate.deleteOne({ _id: candidate._id })
    // Delete the associated user
    await User.deleteOne({ _id: associatedUser._id })

    revalidatePath('dashboard/candidateManagement')
    return { success: true, message: 'Candidate and associated user deleted successfully' }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}