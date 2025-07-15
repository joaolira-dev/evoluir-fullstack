export const calcularIdade = (dataNascimento) => {
    const anoNascimento = dataNascimento.slice(0,4)
    const anoAtual = new Date().getFullYear();
    return anoAtual - parseInt(anoNascimento);
  };