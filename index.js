var t = $("#example").DataTable({
  paging: false,
  info: false,
  search: "sat",
});
$(".dataTables_filter input").addClass("search-query");

fetch("https://v3.paribu.com/app/initials")
  .then((response) => response.json())
  .then(function (data) {
    var result = data.data.currencies;
    for (var k in result) {
      t.row
        .add([
          k,
          result[k].name,
          result[k].group,
          result[k].withdraw.enabled,
          result[k].deposit.enabled,
        ])
        .draw(false);
    }
  })
  .catch((error) => {});






  