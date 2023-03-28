
function copyToClipboard() {
    const button = document.querySelector('button');
    const text = button.innerText;
    navigator.clipboard.writeText(text);
    const copiedMessage = document.createElement('span');
    copiedMessage.innerText = 'Copied!';
    copiedMessage.style.backgroundColor = '#222';
    copiedMessage.style.color = '#fff';
    copiedMessage.style.padding = '5px 10px';
    copiedMessage.style.position = 'absolute';
    copiedMessage.style.top = '50%';
    copiedMessage.style.left = '50%';
    copiedMessage.style.transform = 'translate(-50%, -50%)';
    copiedMessage.style.border = '1px solid #fff';
    document.body.appendChild(copiedMessage);
    setTimeout(() => {
      document.body.removeChild(copiedMessage);
    }, 1000);
}
