const width = 900,
  height = 500;
const projection = d3
  .geoMercator()
  .scale(130)
  .translate([width / 2 - 75, height / 1.5]);
const path = d3.geoPath().projection(projection);

const svg = d3
  .select("#world-map_map")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const tooltip = d3.select("#world-map_tooltip");

d3.json("world-110m.v1.json").then(function (world) {
  const countries = topojson.feature(world, world.objects.countries).features;
  const highlightedCountries = new Map([
    ["840", "США"],
    ["124", "Канада"],
    ["76", "Бразилия"],
    ["356", "Индия"],
    ["156", "Китай"],
    ["643", "Россия"],
    ["036", "Австралия"],
    ["112", "Беларусь"],
  ]);

  svg
    .selectAll(".world-map_country")
    .data(countries)
    .enter()
    .append("path")
    .attr("class", "world-map_country")
    .attr("d", path)
    .each(function (d) {
      if (highlightedCountries.has(String(d.id))) {
        d3.select(this).classed("world-map_highlighted", true);
      }
    })
    .on("mouseover", function (event, d) {
      if (highlightedCountries.has(String(d.id))) {
        d3.select(this).classed("world-map_selected", true);
        tooltip
          .style("opacity", 1)
          .html(highlightedCountries.get(String(d.id)))
          .style("left", event.pageX + 5 + "px")
          .style("top", event.pageY - 28 + "px");
      }
    })
    .on("mouseout", function (event, d) {
      if (highlightedCountries.has(String(d.id))) {
        d3.select(this).classed("world-map_selected", false);
      }
      // Hide tooltip
      tooltip.style("opacity", 0);
    });
});
