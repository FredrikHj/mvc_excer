export default {
  people: [],
  addPeople: function(getInputFname, getInputSname, getInputAge) {
    this.people.push({
      getInputFname: getInputFname,
      getInputSname: getInputSname,
      getInputAge: getInputAge
    });
  }
};
