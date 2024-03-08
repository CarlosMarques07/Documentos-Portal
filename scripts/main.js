const openFilter = document.getElementById("openFilter"),
  closeFilter = document.getElementById("closeFilter"),
  openSendDocumentModal = document.getElementById("openSendDocumentModal"),
  closeSendDocumentModal = document.getElementById("closeSendDocumentModal"),
  sendDocument = document.getElementById("sendDocument"),
  sendDocumentSubject = document.getElementById("sendDocumentSubject"),
  sendDocumentFolder = document.getElementById("sendDocumentFolder"),
  sendDocumentCollaborator = document.getElementById(
    "sendDocumentCollaborator"
  ),
  sendDocumentType = document.getElementById("sendDocumentType"),
  sendDocumentLimit = document.getElementById("sendDocumentLimit"),
  sendDocumentComplementaryInformation = document.getElementById(
    "sendDocumentComplementaryInformation"
  ),
  sendDocumentReply = document.getElementsByName("sendDocumentReply"),
  sendDocumentFile = document.getElementById("sendDocumentFile"),
  sendDocumentButton = document.getElementById("sendDocumentButton"),
  user = "Carlos Marques";
  toggleFilter = () => {
        document.getElementById("filter").classList.toggle("hide");
  },
  toggleSendDocumentModal = () => {
        document.getElementById("modal").classList.toggle("hide");
        document.getElementById("backgroundFade").classList.toggle("hide");
        resetSendDocumentModal();
  };

let documentList = [],
  administrator = true,
  linhas = document.getElementsByClassName("row");;

sendDocumentButton.addEventListener("click", (send) => {
    send.preventDefault();

    try {
        verifyRequeriments();
        documentList.push(createNewDocument());
            for (let i; i < documentList.length; i++) {
                for (const item of createNewDocument.entries()) {
                console.log(item);
                }
            }
        }
        catch (e) {
        showErrorAlert();
        }
    });

[openFilter, closeFilter].forEach((exibition) => {
    exibition.addEventListener("click", () => toggleFilter());
});

[openSendDocumentModal, closeSendDocumentModal].forEach((exibition) => {
    exibition.addEventListener("click", () => toggleSendDocumentModal());
    resetSendDocumentModal();
});


sendDocumentSubject.addEventListener("input", function () {
    const subjectLength = sendDocumentSubject.value.length;

    if (subjectLength == 0) {
        document
        .getElementById("errorSendDocumentSubject")
        .classList.remove("hide");
        sendDocumentSubject.classList.add("error");
    } else {
        document.getElementById("errorSendDocumentSubject").classList.add("hide");
        sendDocumentSubject.classList.remove("error");
    }
});

sendDocumentFolder.addEventListener("blur", function () {
    const folderSelected = sendDocumentFolder.value;

    if (folderSelected == 0) {
        document.getElementById("errorSendDocumentFolder").classList.remove("hide");
        sendDocumentFolder.classList.add("error");
    } else {
        document.getElementById("errorSendDocumentFolder").classList.add("hide");
        sendDocumentFolder.classList.remove("error");
    }
});

sendDocumentCollaborator.addEventListener("blur", function () {
    const collaboratorSelected = sendDocumentCollaborator.value;

    if (collaboratorSelected == 0) {
        document
        .getElementById("errorSendDocumentCollaborator")
        .classList.remove("hide");
        sendDocumentCollaborator.classList.add("error");
    } else {
        document
        .getElementById("errorSendDocumentCollaborator")
        .classList.add("hide");
        sendDocumentCollaborator.classList.remove("error");
    }
});

sendDocumentType.addEventListener("blur", function () {
    const typeSelected = sendDocumentType.value;

    if (typeSelected == 0) {
        document.getElementById("errorSendDocumentType").classList.remove("hide");
        sendDocumentType.classList.add("error");
    } else {
        document.getElementById("errorSendDocumentType").classList.add("hide");
        sendDocumentType.classList.remove("error");
    }
});

function verifySubmitSendDocumentSubject() {
    const sendDocumentSubjectValue = sendDocumentSubject.value;
    let validate;

    if (sendDocumentSubjectValue === "") {
        document
        .getElementById("errorSendDocumentSubject")
        .classList.remove("hide");
        sendDocumentSubject.classList.add("error");
        sendDocumentSubject.focus();
        validate = 0;
    } else {
        validate = 1;
    }
    return validate;
}

function verifySubmitSendDocumentFolder() {
    const sendDocumentFolderValue = sendDocumentFolder.value;
    let validate;

    if (sendDocumentFolderValue == 0) {
        document.getElementById("errorSendDocumentFolder").classList.remove("hide");
        sendDocumentFolder.classList.add("error");
        validate = 0;
    } else {
        validate = 1;
    }
    return validate;
}

function verifySubmitSendDocumentCollaborator() {
    const sendDocumentCollaboratorValue = sendDocumentFolder.value;
    let validate;

    if (sendDocumentCollaboratorValue == 0) {
        document
        .getElementById("errorSendDocumentCollaborator")
        .classList.remove("hide");
        sendDocumentCollaborator.classList.add("error");
        validate = 0;
    } else {
        validate = 1;
    }
    return validate;
}

function verifySubmitSendDocumentType() {
    const sendDocumentTypeValue = sendDocumentType.value;
    let validate;

    if (sendDocumentTypeValue == 0) {
        document.getElementById("errorSendDocumentType").classList.remove("hide");
        sendDocumentType.classList.add("error");
        validate = 0;
    } else {
        validate = 1;
    }
    return validate;
}

function showErrorAlert() {
    const errorAlert = document.createElement("div");
    const text = document.createElement("p");
    const title = document.createElement("h1");

    text.textContent = "Favor, preencha os campos assinalados como obrigatórios e tente novamente.";
    title.textContent = "Erro ao enviar!";
    
    errorAlert.appendChild(text);
    errorAlert.appendChild(title);

    document.body.appendChild(errorAlert);
    throw Error("passou por aqui");
}

function verifyRequeriments() {
    let valid = true;
    if (
        verifySubmitSendDocumentCollaborator() == 0 &&
        verifySubmitSendDocumentFolder() == 0 &&
        verifySubmitSendDocumentSubject() == 0 &&
        verifySubmitSendDocumentType() == 0
    ){
        verifySubmitSendDocumentCollaborator();
        verifySubmitSendDocumentFolder();
        verifySubmitSendDocumentSubject();
        verifySubmitSendDocumentType();        
    }
}

function getStatus() {
    let status;

    if ((sendDocumentReply.value = 1)) {
        status = "Pendente";
    } else {
        status = "Concluído";
    }
    return status;
}

function getReceiveDate() {
    const receiveDate = new Date();
    return receiveDate;
}

function createNewDocument() {
    const createNewDocument = new FormData(sendDocument);
    createNewDocument.append("status", getStatus());
    createNewDocument.append("receiveDate", getReceiveDate());
    createNewDocument.append("user", user);

    return createNewDocument;
}

for (let i = 0; i < linhas.length; i++) {
    let calculatePosition = i % 2;
    console.log(calculatePosition);

    if (calculatePosition == 0) {
        linhas[i].style.backgroundColor = "#f7f7f7";
    } else {
        linhas[i].style.backgroundColor = "#efefef";
    }
}

function resetSendDocumentModal() {
    sendDocument.reset();
    document.getElementById("errorSendDocumentSubject").classList.add("hide");
    sendDocumentSubject.classList.remove("error");
    document.getElementById("errorSendDocumentFolder").classList.add("hide");
    sendDocumentFolder.classList.remove("error");
    document
    .getElementById("errorSendDocumentCollaborator")
    .classList.add("hide");
    sendDocumentCollaborator.classList.remove("error");
    document.getElementById("errorSendDocumentType").classList.add("hide");
    sendDocumentType.classList.remove("error");
}
