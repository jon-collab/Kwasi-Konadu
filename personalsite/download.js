document.querySelector('.button').addEventListener('click', function() {
    // Get the data-download attribute value (file URL)
    var downloadLink = this.getAttribute('data-download');

    // Create an anchor element and set its href to the download link
    var anchor = document.createElement('a');
    anchor.href = downloadLink;

    // Set the download attribute to specify the desired file name
    anchor.download = 'Kwasi_Konadu.docx';

    // Append the anchor to the document and trigger the click event
    document.body.appendChild(anchor);
    anchor.click();

    // Remove the anchor element from the document
    document.body.removeChild(anchor);
});