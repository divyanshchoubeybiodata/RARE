// app/actions.js
'use server'

import Agency from '../models/Agency'
import connect from './db'

export async function updateAgency(userId, updatedAgencyData) {
  try {
    await connect()
    // Find the agency by userId
    const agency = await Agency.findOne({ userid: userId })

    if (!agency) {
      throw new Error(`Agency with user ID ${userId} not found`)
    }

    // Update the agency with the provided data
    agency.agencyName = updatedAgencyData.agencyName || agency.agencyName
    agency.state = updatedAgencyData.state || agency.state
    agency.city = updatedAgencyData.city || agency.city
    agency.contactPersonName = updatedAgencyData.contactPersonName || agency.contactPersonName
    agency.contactPersonEmail = updatedAgencyData.contactPersonEmail || agency.contactPersonEmail
    agency.contactPersonNumber = updatedAgencyData.contactPersonNumber || agency.contactPersonNumber
    agency.designation = updatedAgencyData.designation || agency.designation

    // Save the updated agency
    const updatedAgency = await agency.save()

    return { success: true, message: 'Agency updated successfully', updatedAgency }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}