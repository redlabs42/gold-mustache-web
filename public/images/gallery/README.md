# Galeria de Trabalhos - Antes/Depois

## Instruções para adicionar imagens

Para adicionar novas transformações à galeria, siga estas etapas:

### 1. Prepare as imagens

- **Formato recomendado**: JPG ou WebP
- **Resolução**: Mínimo 800x600px (proporção 4:3)
- **Tamanho**: Otimize para web (máximo 500KB por imagem)
- **Nomenclatura**: 
  - `before-X.jpg` para imagens "antes"
  - `after-X.jpg` para imagens "depois"
  - Onde X é o número sequencial (1, 2, 3, etc.)

### 2. Adicione as imagens nesta pasta

Coloque os pares de imagens (antes/depois) neste diretório:
```
public/images/gallery/
├── before-1.jpg
├── after-1.jpg
├── before-2.jpg
├── after-2.jpg
└── ...
```

### 3. Atualize o arquivo de constantes

Edite o arquivo `src/constants/gallery.ts` e adicione um novo item ao array `GALLERY_ITEMS`:

```typescript
{
  id: "7",
  before: "/images/gallery/before-7.jpg",
  after: "/images/gallery/after-7.jpg",
  service: "Nome do Serviço",
  category: "haircut", // ou "beard", "combo", "styling"
}
```

### Categorias disponíveis:

- `haircut` - Cortes de cabelo
- `beard` - Serviços de barba
- `combo` - Corte + Barba
- `styling` - Finalização e styling

### Dicas de fotografia:

1. Use boa iluminação natural ou artificial
2. Mantenha o mesmo ângulo e distância nas fotos antes/depois
3. Fundo neutro e limpo
4. Cliente centralizado no quadro
5. Foco nítido no resultado

### Otimização de imagens:

Você pode usar ferramentas online como:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

Ou via linha de comando:
```bash
# Converter para WebP (melhor compressão)
cwebp -q 80 before-1.jpg -o before-1.webp
```
