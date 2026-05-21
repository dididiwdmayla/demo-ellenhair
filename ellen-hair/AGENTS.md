# SYSTEM INSTRUCTIONS — PROJETO ELLEN HAIR (SKIN BOULEVARD)

# IDENTIDADE DO PROJETO

Site institucional para a Ellen Hair, salão de beleza unissex em Maringá-PR com 35 anos de mercado e 3 unidades. Trata-se de uma PROPOSTA COMERCIAL real. A skin se chama BOULEVARD e será reutilizada para outros estabelecimentos premium multi-serviço futuramente.

O eixo emocional é TRADIÇÃO CONTEMPORÂNEA, REFINAMENTO UNISSEX, ACOLHIMENTO ELEGANTE. Cliente entrando precisa sentir "este é um lugar premium que serve homens e mulheres com a mesma elegância". Discrição é importante, mas presença visual também — a marca tem 35 anos e isso precisa aparecer com peso.

# REGRAS DE ARQUITETURA (não negociáveis)

Stack: Next.js 14+ App Router + TypeScript + Tailwind + Framer Motion. Sem alternativas.

Modularidade: lib/config.ts, lib/content.ts, lib/services-data.ts, lib/units-data.ts, lib/awards-data.ts. Nada hardcoded em componentes.

Sem backend, sem CMS, sem agendamento ativo, sem blog, sem newsletter, sem login. Front-end estático puro.

# REGRAS DE CONTEÚDO (CRÍTICO)

1. O LOGO é fornecido pelo USUÁRIO como arquivo anexo. NUNCA crie logo genérico ou tente reinterpretar. Use exatamente o arquivo fornecido. Se o arquivo ainda não chegou, deixe placeholder visual neutro reservando o espaço, nunca um logo inventado.
2. NÃO inclua preços de serviços em nenhuma parte do site. Decisão estratégica do cliente. Cada serviço mostra TEMPO DE DURAÇÃO em vez de preço. CTAs levam ao WhatsApp.
3. Use APENAS os 3 prêmios listados (2024, 2023, 2021). NÃO inclua prêmios de 2025 ou 2026 mesmo se aparecerem em referências externas — são suspeitos e podem ser erro de data no site original do cliente.

# REGRAS DE COMPORTAMENTO DO AGENTE

1. CRÍTICO — Em pedidos visuais ("adicione X", "torne Y mais Z", "mais cor"), aplique GENEROSAMENTE. Em dúvida sobre intensidade, opte pela versão MAIS PRESENTE. Mudanças imperceptíveis são FALHA.
2. "Não inventar funcionalidades" significa não criar features técnicas extras. NÃO significa ser conservador em decisões estéticas.
3. Pedidos repetidos = primeira aplicação foi tímida. Duplique ou triplique a intensidade.
4. Cores da marca (vermelho Ellen #C8102E, amarelo Ellen #F2C200) têm uso CONTROLADO. Vermelho como acento (6-8 ocorrências máx), amarelo como acento pontualíssimo (1 ocorrência).
5. SITE UNISSEX VERDADEIRO. Nenhum elemento hiper-feminino (rosa, florais, cursivas finíssimas) NEM hiper-masculino (couro, navalha, ferro envelhecido). Fotos alternam homem e mulher em proporção equilibrada.
6. NÃO sugira mudanças de stack.
7. Mostrar caminho completo de arquivos modificados. Listar arquivos afetados antes de editar múltiplos.
8. Mobile-first. 380px primeiro.
9. Acessibilidade não-opcional: alt, aria-label, focus visible, AA contraste, prefers-reduced-motion respeitado.
10. Performance: Lighthouse 90+ target.
