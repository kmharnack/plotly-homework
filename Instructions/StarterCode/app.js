// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.


d3.json("samples.json").then((data) => {
    //  Create the Traces
    var trace1 = {
      x: data.samples.samples_id,
      y: data.samples.sample_values,
      type: "bar",
      
    };
  
    // Create the data array for the plot
    var data = [trace1];
   
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data);
  });


// // Create an array of each country's numbers
// var names = Object.values(samples.names);
// var metadata = Object.values(samples.metadata);
// var samples_id = Object.values(samples.samples.id);
// var samples_otu = Object.values(samples.samples.otu_labels);
// var samples_values = Object.values(samples.samples.sample_values);
// var samples_otu_id = Object.values(samples.samples.otu_id);



//   // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
  function updatePlotly() {
//     // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    // var x = [];
    // var y = [];
 
    //for dataset if dataset == id then samples.sample_values


    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();
  