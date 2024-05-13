//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters her

addFilter ('statusTag',status =>{

switch(status){
case'Completed':
return 'govuk-tag--blue'
case 'Incomplete':
    return 'govuk-tag-light--blue'

default:
return'govuk-tag--grey'


}




})
