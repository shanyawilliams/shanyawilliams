(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphBar');
var graphnode = element.node();


var graphTitle = "Favorite colors";

var data1 = {
  name: 'Red Title',
  x: ['purple', 'blue', 'green', 'orange', 'pink', 'black', 'white', 'gray'],
  y: [100, 50, 50, 25, 75, 60, 50, 10],
  type: 'bar',
  marker: {
    color: ['#6600cc', '#0000ff', '#009933', '#ff6600', '#ff66cc','#000000', '#ffffff', '#808080'],
    line: {
        width: 2.5
    } 
  }
};

Plotly.plot(graphnode, [data1], {
    title: graphTitle,
    font: {
        size: 16
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});

})();