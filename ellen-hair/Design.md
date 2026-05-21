# Design: Skin BOULEVARD

**Boulevard** é a skin arquitetônica criada para estabelecimentos premium, multisserviços e multilocais (salões unissex, clínicas estéticas, estúdios).

## Eixo Emocional
- Tradição Contemporânea
- Refinamento Unissex
- Acolhimento Elegante

## Tipografia (Google Fonts)
1. **Cormorant Garamond**: Display / Headlines. Traz autoridade literária, clássica.
2. **Inter**: Sans serifa base. Garante leitura de dados e parágrafos sem atrito.
3. **JetBrains Mono**: Dados técnicos. Horários, rótulos, botões rigorosos.
4. **Pinyon Script**: Assinatura manual isolada (1 uso máximo por site).

## Regras de Paleta
A paleta base obriga tons neutros off-white/warm, repelindo fundo branco puro:
- **Base 1**: `#FAFAF8` (Off-white principal)
- **Base 2**: `#F2EFE8` (Creme para alternância vertical)
- **Acentos Cliente**: Aplicados APENAS via CSS Variables (`--color-red-ellen`, `--color-yellow-ellen`).

## Como customizar para novo cliente
1. Edite `app/globals.css` substituindo as variáveis de cores de acento (`--color-red-ellen` vira a cor principal do novo negócio, `--color-yellow-ellen` a secundária).
2. Substitua os arquivos no diretório `lib/`. A arquitetura aguarda `.ts` estruturados.
3. Substitua `logo.png` na pasta `/public`. As dimensões no componente `Logo.tsx` já comportam bounding box fluído.

## Estrutura de Assets
- A pasta `/public/assets/` deve seguir hierarquia por seção.
- Cada seção do site tem sua pasta dentro de `/assets` (ex: `/assets/hero`, `/assets/services`).
- Nomenclatura snake_case minúscula, padrão `[seção]-[contexto]-[número].jpg`.
- Subdivisão de categorias quando aplicável (ex: `/assets/gallery/cabelo/`).
- Esse padrão se aplica a TODAS as skins futuras (BOULEVARD, VERTEBRA, NORTE, ATELIÊ).
