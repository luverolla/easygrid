# Easygrid

Easygrid is a lightweight utility that automates creation of grid-like flexbox layouts. It's free and open-source.

## Grid sizing

Easygrid follows Bootstrap's grid sizing. Things are organised assuming a total width of 12 units. User can create cells 
of every integer `size` between 1 and 12 included. The resulting width will be `(size / 12 * 100)%` of total width.

Between columns and between rows there are two different gap sizes. Both are set expressed in `em`, and set on `0.5em` by default.

## Usage

This repository includes a `demo.html` file that shows how to use the utility. The style included in that file is to be intended only for demo purposes.

The key of this utility stands in the `data-eg-grid` attribute, applied on the grid container. It accept a string of values representing the width of each cell measured as said above. Rows are separated by a semicolon `;`, cells are separated by a comma `,`. The number of children with `data-sg-item` attribute MUST match with the value of `data-sg-grid` attribute. Otherwise, cells in excess will not be rendered and there could be unexcepted behaviours.
