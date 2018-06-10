const axios = require('axios')
const api_key = process.env.GOV_DATA_API_KEY

class College {
  constructor(id, name, state, city, size, women, men, tuition_in, tuition_out, avg_cost, admission_rate, sat,completion_rate, default_rate, percent_loan, percent_pell, loan_principal, median_debt_1, median_debt_2, median_debt_3){
    this.id = id
    this.name = name
    this.state = state
    this.city = city
    this.size = size
    this.women = women
    this.men = men
    this.tuition_in = tuition_in
    this.tuition_out = tuition_out
    this.avg_cost = avg_cost
    this.admission_rate = admission_rate
    this.sat = sat
    this.completion_rate = completion_rate
    this.default_rate = default_rate
    this.percent_loan = percent_loan
    this.percent_pell = percent_pell
    this.loan_principal = loan_principal
    this.median_debt_1 = median_debt_1
    this.median_debt_2 = median_debt_2
    this.median_debt_3 = median_debt_3

  }
}

module.exports.myAxiosCall = 
 axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=new%20york%20university&_fields=id,school.name,school.state,school.city,2015.student.size,2015.student.demographics.women,2015.student.demographics.men,2015.cost.tuition.in_state,2015.cost.tuition.out_of_state,2015.cost.attendance.academic_year,2015.admissions.admission_rate.overall,2015.admissions.sat_scores.average.overall,2015.completion.rate_suppressed.four_year,2015.repayment.3_yr_default_rate,2015.aid.students_with_any_loan,2015.student.students_with_pell_grant,2015.aid.loan_principal,2015.aid.median_debt.income.0_30000,2015.aid.median_debt.income.30001_75000,2015.aid.median_debt.income.greater_than_75000&api_key=${api_key}`).then((response) => {
  var college = new College (
    response.data.results[1].id,
    response.data.results[1]['school.name'],
    response.data.results[1]['school.state'],
    response.data.results[1]['school.city'],
    response.data.results[1]['2015.student.size'],
    response.data.results[1]['2015.student.demographics.women'],
    response.data.results[1]['2015.student.demographics.men'],
    response.data.results[1]['2015.cost.tuition.in_state'],
    response.data.results[1]['2015.cost.tuition.out_of_state'],
    response.data.results[1]['2015.cost.attendance.academic_year'],
    response.data.results[1]['2015.admissions.admission_rate.overall'],
    response.data.results[1]['2015.admissions.sat_scores.average.overall'],
    response.data.results[1]['2015.completion.rate_suppressed.four_year'],
    response.data.results[1]['2015.repayment.3_yr_default_rate'],
    response.data.results[1]['2015.aid.students_with_any_loan'],
    response.data.results[1]['2015.student.students_with_pell_grant'],
    response.data.results[1]['2015.aid.loan_principal'],
    response.data.results[1]['2015.aid.median_debt.income.0_30000'],
    response.data.results[1]['2015.aid.median_debt.income.30001_75000'],
    response.data.results[1]['2015.aid.median_debt.income.greater_than_75000']
  )
  return college

}).catch((error) => {
  console.log(error)
})
