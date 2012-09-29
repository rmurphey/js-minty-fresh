function updateDates() {
  var startDate = $("#start-date").datepicker("getDate");

  $("#menu-item-1 .day").text(startDate.getDate());
  $("#menu-item-1 .month").text(Util.monthToText(startDate.getMonth()));
  $("#menu-item-1 .year").text(startDate.getFullYear());

  var endDate = $("#end-date").datepicker("getDate");

  $("#menu-item-2 .day").text(endDate.getDate());
  $("#menu-item-2 .month").text(Util.monthToText(endDate.getMonth()));
  $("#menu-item-2 .year").text(endDate.getFullYear());
}