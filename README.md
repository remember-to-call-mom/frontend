# Remember to Call Mom - Frontend Project

Remember to Call Mom - Random Reminder

## What we want to do

### Reminder Input Form

* Channel: Select Input: Push, email, webhook
* Text Field: Reminder Title
* Number Input: Min input time
* Select Input: hours, days, weeks, months

* Number Input: Max input time
* Select Input: hours, days, weeks, months
* Checkbox: Latest


## Datamodel

### Reminder

* id: uuid
* ownedBy: uuid
* channel: string, ['push', 'email', 'webhook']
* title: string
* min: number
* min-unit: string, ['hours', 'days', 'weeks', 'months']
* max: number
* max-unit: string, ['hours', 'days', 'weeks', 'months']
* limit: boolean
* createdAt: timestamp
* updatedAt: timestamp
