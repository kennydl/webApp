const fabricStyle = `
    div.ms-Overlay.overlay-79 {
        opacity: 0 !important;
        /* background-color: rgba(255, 255, 255, 0) !important; */
        transition: opacity 0.367s cubic-bezier(0.1, 0.9, 0.2, 1) 0s;
    }
    
    div.ms-TextField-suffix {
        background: inherit !important;
        padding: 0px !important;
    }
    
    div.ms-TextField-wrapper {
        background: inherit !important;
    }
    
    div.ms-TextField-fieldGroup {
        background: inherit !important;
    }
    
    /* input.ms-TextField-field {
        padding-right: 5px !important;
    } */
    
    .fabric-custom-btn-red {
        // Dark Theme
        // background-color: rgba(75, 32, 32, 1) !important;

        //Light Theme
        background-color: #ce4e4e !important;
        color: #fef9ec !important;  // white color

    }

    input:-internal-autofill-selected{
        background-color: var(--page-sidebar-color) !important;
    }
`;

const pageStyleVar = `
:root {
    --page-height: 100vh;
    --header-height: 50px;
    --body-container-padding-bottom: 10px;
    --body-container-height: calc(
    var(--page-height) - var(--header-height));
    
    // Dark Theme
    // --page-header-color:  rgb(158, 130, 130);
    // --page-header-color:  #8E9766;
    // --page-header-color:  rgb(172,152,139);
    // --page-sidebar-color: rgb(68, 68, 68);
    // --page-content-color:  rgb(95, 95, 95);

    // Light Theme
    --page-header-color:  #b79191;
    --page-sidebar-color: #ede7d5;
    --page-content-color: rgba(254,249,236,1);
    --page-text-color: rgba(51,51,51,1);
  }
`;

export default `
    body {
        display: block;
        margin: 0px;
    }
  
    ${pageStyleVar}
    ${fabricStyle}
`;
