const pdfBtn = document.querySelector(".pdf-btn");

const userDetails = localStorage.getItem("userData");
const parseUserData = JSON.parse(userDetails);
console.log(parseUserData);

function generatePDF() {
    // Define the content and styles of the PDF
    let docDefinition = {
        content: [
            {
                text: 'Bank of Bishal (BOB)\n\n',
                style: 'header'
            },
            {
                text: `Welcome ${parseUserData.username}`,
                style: 'subheader'
            },
            {
                ul: [
                    `Your current balance: ${parseUserData.userbalance}`,
                ]
            },
        ],
        styles: {
            header: {
                fontSize: 30,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 20] // [left, top, right, bottom]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                alignment: 'center',
                margin: [0, 20, 0, 20]
            }
        }
    };

    // Create a PDF document
    var pdfDoc = pdfMake.createPdf(docDefinition);

    // Open the PDF in a new window/tab
    pdfDoc.open();
}


pdfBtn.addEventListener("click", () => {
    generatePDF();
})