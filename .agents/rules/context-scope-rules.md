---
trigger: always_on
description: Dica Prática: Deixe as regras universais salvas na raiz do projeto dentro de um arquivo de configuração/regras do agente. Assim, o contexto inicial já nasce blindado e você só precisa passar comandos diretos no chat.
---

# WORKSPACE CONTEXT & SCOPE RULES

## 1. Escopo Estrito de Leitura e Edição
- Foque exclusivamente nos arquivos de código da pasta `src/`.
- Ignore completamente diretórios pesados e de build:
  `node_modules/`, `.git/`, `dist/`, `build/`, `.next/`, `public/assets/`, `*.log`, `*.lock`
- Não execute varreduras completas (`list_dir` ou busca recursiva no root) a menos que explicitamente solicitado.

## 2. Inspeção Sob Demanda
- Leia apenas as funções e trechos de código estritamente necessários para a tarefa atual em vez de carregar arquivos inteiros.
- Identifique os arquivos relevantes de forma cirúrgica dentro de `src/`.