var map = L.map('mapid').setView([19.44, -99.13], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo( map );

/*L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: ['a','b','c']
}).addTo( map );*/

var markerClusters = L.markerClusterGroup({
	disableClusteringAtZoom: 17
	});

for ( var i = 0; i < markers.length; ++i )
{
 if (markers[i].geometry != null) {
  var popup = '<br/><b>Categoria delito:</b> ' + markers[i].properties.delito;

  var m = L.marker( [markers[i].geometry.coordinates[1], markers[i].geometry.coordinates[0]])
                  .bindPopup( popup );

  markerClusters.addLayer( m );
  }
}

map.addLayer( markerClusters );