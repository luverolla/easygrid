/**
 * Provides easy way to create CSS grid
 * @author Luigi Verolla <luverolla@outlook.com>
*/
class EasyGrid
{
    /**
     * Margin between rows, expressed in em, applied on both sides
     * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
     * @constant
     * @static
     * @type {number}
     */
    ROW_GAP = .5;

    /**
     * Margin between columns, expressed in em, applied on both sides
     * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
     * @constant
     * @static
     * @type {number}
    */
    COL_GAP = .5;

    /**
     * root grid element
     * @type {HTMLDivElement}
    */
    el;

    /**
     * matrix of cells. Values are scaled so that 100% = 12 (like Bootstrap)
     * For istance, a value of 3 will mean 3/12 = 1/4 of total length
     * @type {number[][]}
    */
    cells;

    /**
     * Creates new grid
     * @param {HTMLDivElement} el root grid element 
    */
    constructor(el)
    {
        this.el = el;

        // rows are separated by a semicolon (;), columns by a comma (,)
        this.cells = el.dataset.egGrid.split(';').map(r => r.split(','));
    }

    init()
    {
        this.el.style.display = "flex";
        this.el.style.flexDirection = "column";
        this.el.removeAttribute("data-eg-grid");

        let domCells = this.el.querySelectorAll("[data-eg-cell]");
        
        this.cells.forEach((row, ri) =>
        {
            let flexRow = document.createElement("div");
            flexRow.style.display = "flex";
            flexRow.style.width = "100%";
            flexRow.style.margin = `${this.COL_GAP}em 0`;

            row.forEach((cell, ci) =>
            {
                let index = ri * row.length + ci;
                let flexCol = domCells.item(index);
                flexCol.style.display = "flex";
                flexCol.style.flexDirection = "column";
                flexCol.style.margin = `0 ${this.COL_GAP}em`;
                flexCol.style.width = `${cell / 12 * 100}%`;

                flexCol.removeAttribute("data-eg-cell");
                flexRow.appendChild(flexCol);
            });

            this.el.appendChild(flexRow);
        });
    }
}


document.addEventListener("DOMContentLoaded", () =>
    document.querySelectorAll("[data-eg-grid]").forEach(e =>
        new EasyGrid(e).init()
    )
);