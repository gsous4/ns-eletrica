// Dados do negócio num lugar só: para mudar telefone ou serviços, mexa aqui.
export const TELEFONE = '5561993327199'
export const NOME_PROFISSIONAL = 'Natanael Sousa'

export const link = (mensagem) =>
  `https://wa.me/${TELEFONE}?text=${encodeURIComponent(mensagem)}`

export const MENSAGEM_GERAL =
  'Olá Natanael, vim pelo site da NS Elétrica e gostaria de um orçamento.'

export const mensagemServico = (nome) =>
  `Olá Natanael, vim pelo site da NS Elétrica e gostaria de um orçamento de: ${nome}.`

export const SERVICOS = [
  { nome: 'Instalação elétrica', descricao: 'Do ponto de luz ao circuito completo, dentro da norma.' },
  { nome: 'Troca de disjuntores', descricao: 'Disjuntor desarmando ou antigo? Troco com segurança.' },
  { nome: 'Manutenção de quadro', descricao: 'Revisão e organização do quadro de distribuição.' },
  { nome: 'Lâmpadas e fitas de LED', descricao: 'Iluminação nova, fitas de LED e troca de lâmpadas.' },
  { nome: 'Reparos emergenciais', descricao: 'Curto, falta de energia, cheiro de queimado: chame já.', emergencia: true },
  { nome: 'Troca de fiação', descricao: 'Fiação velha ou sobrecarregada substituída por nova.' },
]
