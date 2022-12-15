# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Epic: Improve Facility Data

 - Create customs id's in Facilities Table
 Acceptance criteria: 
 * Add a new customId on Facilitie Table 
 * Agent's table and Facility's table needs to be relationed 
 * Create the migrations

 Implementation detail: 
Create the migrations files to execute the query to add the new customId field and the relation using
agentId from Agent table and customId from Facility table.

  Time/Effort:
 3 points or 1 day

 - Save Custom Id on Facility's Table
 Acceptance criteria: 
 * Save on customId field on Facility's table
  * Add tests

 Implementation detail:
 Create a function to save the customId field the agentId + uuid (or business custom text) in order to create and save a customId every time a shift is working with that facilityId, you can use SQL or the ORM.
 Add test using mocha to make sure that we're saving correctly the customId

 Time/Effort:
 2 points or half day

 - Use CustomId to generate reports
 Acceptance criteria: 
 * Get customId from Facility's table'
 * Modified getShiftsByFacility function
 * Add tests

 Implementation detail:
 Modify getShiftsByFacility using the customId to retrieve the shifts data with the current agent

 Time/Effort:
 3 points or 1 day