# Gold Mustache - Barbearia Website MVP

Website profissional para a Barbearia Gold Mustache, localizada em Itapema, Santa Catarina.

## Tecnologias

- **Frontend**: Next.js 15, React 18, TypeScript
- **UI Components**: shadcn/ui + Tailwind CSS
- **Integração Social**: Instagram Basic Display API
- **Sistema de Agendamento**: Inbarber App (integração via redirect)

## Funcionalidades

- 🏪 Catálogo de serviços e preços
- 📸 Feed automático do Instagram (@goldmustachebarbearia)
- 🛍️ Vitrine de produtos (@_goldlab)
- 📅 Agendamento via Inbarber App
- 📱 Design responsivo
- ⚡ Performance otimizada
- 🎨 Sistema de design consistente

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Estrutura do Projeto

```
├── app/                 # App Router (Next.js 13+)
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   └── custom/         # Componentes específicos
├── lib/                # Utilitários e configurações
├── public/             # Assets estáticos
└── styles/             # Estilos globais
```

## Agendamento

O sistema de agendamento utiliza o **Inbarber App** já estabelecido:
- Link: https://chat.inbarberapp.com/?id=6c060e9d-672d-4f39-bbc4-fac594f4cc28
- Integração via redirect (preserva fluxo existente)
- Tracking de conversão implementado

## Instagram Integration

- **@goldmustachebarbearia**: Trabalhos e ambiente da barbearia  
- **@_goldlab**: Produtos para venda

Feeds atualizados automaticamente com cache inteligente e fallbacks.
