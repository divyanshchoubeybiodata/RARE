// utils/deleteAgency.js
'use server'

import { revalidatePath } from 'next/cache'
import Agency from '../models/Agency'
import JobPost from '../models/JobPost'
import User from '../models/User' // Import the User model
import connect from './db'

export async function deleteAgency(agencyId) {
  try {
    await connect()
    // Find the agency by ID
    const agency = await Agency.findById(agencyId)

    if (!agency) {
      throw new Error(`Agency with ID ${agencyId} not found`)
    }

    // Find the associated user
    const associatedUser = await User.findById(agency.userid)

    if (!associatedUser) {
      throw new Error(`User associated with agency ${agencyId} not found`)
    }

    // Delete all job posts associated with the agency
    await JobPost.deleteMany({ agencyId: agency._id })

    // Delete the agency
    await Agency.deleteOne({ _id: agency._id })

    // Delete the associated user
    await User.deleteOne({ _id: associatedUser._id })
    revalidatePath('/dashboard/agencyManagement')

    return { success: true, message: 'Agency, associated job posts, and user deleted successfully' }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}