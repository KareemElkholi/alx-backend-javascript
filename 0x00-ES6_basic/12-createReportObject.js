export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(val) { return Object.keys(val).length; },
  };
}
