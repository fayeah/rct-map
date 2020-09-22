export function highlightCountries(countriesList, colorCode, svg) {
  let flag;
  getPath(svg)
    .filter((geoJson) => {
      flag = false;
      countriesList.forEach((country) => {
        if (country === geoJson['properties']['name']) {
          flag = true;
        }
      });
      return flag;
    })
    .style('fill', colorCode);
}

export function getPath(svg) {
  return svg
    .selectAll('path');
}


export function highlightAllCountries(colorCode, svg) {
  getPath(svg)
  .style('fill', colorCode);
}

export function getMappingCountriesInSelectedRegion(data, region) {
  return data['mappings']
    .filter((country) => {
      return country.region === region.name
    })
    .map((country) => {
      return country.name;
    });
}

export function getMappingCountriesInSelectedCoutries(data, selectedCountries) {
  let isSelected;
  return data['mappings']
    .filter((country) => {
      isSelected = false;
      selectedCountries.forEach((selectedCountry) => {
        country['countries'].forEach(eachCountry => {
          if (eachCountry === selectedCountry.name) {
            isSelected = true;
          }
        });
      });
      return isSelected;
    })
    .map((country) => {
      return country.name;
    });
}