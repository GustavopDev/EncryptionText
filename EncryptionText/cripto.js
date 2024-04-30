function criptografar() {
    const textoOriginal = document.getElementById('texto').value;
    const textoCriptografado = textoOriginal
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    document.getElementById('texto-criptografado').value = textoCriptografado;

    const regex = /[A-ZÀ-Ú]/; // Verifica se há letras maiúsculas ou com acento
    const acentosRegex = /[ÁÀÃÉÈÍÌÓÒÕÚÙáú]/; // Verifica se há caracteres acentuados

    if (regex.test(textoOriginal) || acentosRegex.test(textoOriginal)) {
        alert('O texto não pode conter letras maiúsculas ou caracteres acentuados.');
        document.getElementById('texto').value = ''; // Limpa o texto
        return; // Sai da função
    }
}


function descriptografar() {
    const textoOriginal = document.getElementById('texto').value; // Pegar o texto conforme o usuário digitou

    // Limpar o conteúdo de 'texto-criptografado' para evitar que o texto criptografado anterior permaneça visível
    document.getElementById('texto-criptografado').value = '';

    // Atualizar o campo de texto 'texto-criptografado' com o texto original, apenas convertendo para minúsculas
    document.getElementById('texto-criptografado').value = textoOriginal.toLowerCase();
}

function copiarTexto() {
    const textoCifrado = document.getElementById('texto-criptografado');
    textoCifrado.select();
    document.execCommand('copy');
    alert('TEXTO COPIADO COM SUCESSO!!!');
}
