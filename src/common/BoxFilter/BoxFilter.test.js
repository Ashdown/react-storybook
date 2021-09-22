// import React from 'react'
// import { render } from '@testing-library/react'
// import { Timesheet } from '../../../components/company/CompanyTimesheetPage/testUtils.jsx'
// import FilteredTimesheets from './FilteredTimesheets'
//
// describe('FilteredTimesheets', () => {
//   const timesheets = [
//     Timesheet({ id: '<timesheet1>', weekStarting: '2020-03-23' }),
//     Timesheet({ id: '<timesheet2>', weekStarting: '2020-03-16', job: { id: '<job2>', title: '<job2title>' } }),
//     Timesheet({ id: '<timesheet3>', weekStarting: '2020-03-09', job: { id: '<job3>', title: '<job3title>' }, candidate: { name: { first: 'Emile', last: 'Zola' } } }),
//   ]
//
//   describe('by default', () => {
//     it('shows all timesheets for candidates', () => {
//       const { getAllByText } = render(<FilteredTimesheets timesheets={timesheets} navigate={jest.fn()} />)
//
//       expect(getAllByText('Bob Hannent')).toHaveLength(2)
//       expect(getAllByText('Emile Zola')).toHaveLength(1)
//     })
//
//     it('renders timesheet week numbers', () => {
//       const { getByText } = render(<FilteredTimesheets timesheets={timesheets} navigate={jest.fn()} />)
//
//       expect(getByText('13')).toBeInTheDocument()
//       expect(getByText('12')).toBeInTheDocument()
//       expect(getByText('11')).toBeInTheDocument()
//     })
//
//     it('renders Role, Status and Week filter controls for mobile and desktop', () => {
//       const { getAllByText } = render(<FilteredTimesheets timesheets={timesheets} navigate={jest.fn()} />)
//
//       const [roleFilterCompact, roleFilterDesktop] = getAllByText('Role')
//       const [statusFilterCompact, statusFilterDesktop] = getAllByText('Status')
//       const [weekFilterCompact, weekFilterDesktop] = getAllByText('Week')
//
//       expect(roleFilterCompact).toBeInTheDocument()
//       expect(roleFilterDesktop).toBeInTheDocument()
//
//       expect(statusFilterCompact).toBeInTheDocument()
//       expect(statusFilterDesktop).toBeInTheDocument()
//
//       expect(weekFilterCompact).toBeInTheDocument()
//       expect(weekFilterDesktop).toBeInTheDocument()
//     })
//   })
//
//   describe('filtering by week number', () => {
//     it('only shows timesheets for that week', () => {
//       const { getAllByText, queryByText } = render(<FilteredTimesheets timesheets={timesheets} navigate={jest.fn()} />)
//
//       const [, weekFilterDesktop] = getAllByText('Week')
//       weekFilterDesktop.click()
//
//       const [, week11FilterItemDesktop] = getAllByText('Week 11')
//       week11FilterItemDesktop.click()
//
//       expect(queryByText('11')).toBeInTheDocument()
//       expect(queryByText('12')).not.toBeInTheDocument()
//       expect(queryByText('13')).not.toBeInTheDocument()
//
//       const [, week12FilterItemDesktop] = getAllByText('Week 12')
//       week12FilterItemDesktop.click()
//
//       expect(queryByText('11')).toBeInTheDocument()
//       expect(queryByText('12')).toBeInTheDocument()
//       expect(queryByText('13')).not.toBeInTheDocument()
//     })
//   })
//
//   describe('filtering by job title', () => {
//     it('only shows the timesheets for the selected jobs', () => {
//       const { getAllByText, queryByTestId } = render(<FilteredTimesheets timesheets={timesheets} navigate={jest.fn()} />)
//
//       const [, roleFilterDesktop] = getAllByText('Role')
//       roleFilterDesktop.click()
//
//       const [, roleFilterItemDesktop] = getAllByText('<jobtitle>')
//       roleFilterItemDesktop.click()
//
//       expect(queryByTestId('<timesheet1>')).toBeInTheDocument()
//       expect(queryByTestId('<timesheet2>')).not.toBeInTheDocument()
//       expect(queryByTestId('<timesheet3>')).not.toBeInTheDocument()
//
//       const [, otherRoleItemFilter] = getAllByText('<job3title>')
//       roleFilterItemDesktop.click()
//       otherRoleItemFilter.click()
//
//       expect(queryByTestId('<timesheet1>')).not.toBeInTheDocument()
//       expect(queryByTestId('<timesheet2>')).not.toBeInTheDocument()
//       expect(queryByTestId('<timesheet3>')).toBeInTheDocument()
//     })
//   })
// })
