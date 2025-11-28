# 🖼️ Guia de Otimização de Imagens

## Visão Geral

Este projeto implementa otimização automática de imagens com:
- ✅ Conversão para WebP/AVIF
- ✅ Lazy loading automático
- ✅ Cache agressivo (1 ano)
- ✅ Responsive images
- ✅ Placeholder blur

## Como Usar

### 1. Adicionar Novas Imagens

Coloque suas imagens nos diretórios apropriados:
```
public/
  ├── images/
  │   ├── gallery/     # Galeria de trabalhos
  │   ├── ig/          # Posts do Instagram
  │   ├── sponsors/    # Logos de patrocinadores
  │   └── interno/     # Fotos internas
  └── barbers/         # Fotos da equipe
```

### 2. Otimizar Imagens

Execute o script de otimização:
```bash
npm run optimize:images
```

Este script irá:
- Converter todas as imagens para WebP
- Manter os originais como fallback
- Reduzir o tamanho em ~30-70%
- Gerar relatório de economia

### 3. Usar no Código

#### Opção A: Componente OptimizedImage (Recomendado)
```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

<OptimizedImage
  src="/images/gallery/photo.jpg"
  alt="Descrição"
  width={800}
  height={600}
  fallback="/images/gallery/photo.jpg"
/>
```

#### Opção B: Next.js Image (Manual)
```tsx
import Image from "next/image";

<Image
  src="/images/gallery/photo.webp"
  alt="Descrição"
  width={800}
  height={600}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Configurações

### Next.js Config
- Formatos: WebP e AVIF
- Cache: 1 ano para imagens estáticas
- Device sizes: 640, 750, 828, 1080, 1200, 1920, 2048, 3840
- Image sizes: 16, 32, 48, 64, 96, 128, 256, 384

### Qualidade WebP
- Padrão: 85% (ótimo balanço qualidade/tamanho)
- Effort: 6 (compressão máxima)

## Boas Práticas

### ✅ Fazer
- Sempre usar `alt` descritivo
- Especificar `width` e `height` para evitar layout shift
- Usar `sizes` para responsive images
- Otimizar imagens antes do commit
- Usar WebP como formato principal

### ❌ Evitar
- Imagens maiores que 2MB
- Usar PNG para fotos (use JPG/WebP)
- Esquecer de otimizar novas imagens
- Usar `fill` sem container com aspect-ratio

## Tamanhos Recomendados

| Uso | Largura | Formato | Qualidade |
|-----|---------|---------|-----------|
| Hero | 1920px | WebP | 85% |
| Gallery | 1200px | WebP | 85% |
| Thumbnails | 400px | WebP | 80% |
| Logos | 200px | PNG/SVG | - |
| Team photos | 800px | WebP | 85% |

## Performance

### Antes da Otimização
- Tamanho médio: ~500KB por imagem
- Formato: JPG/PNG
- Cache: Padrão do navegador

### Depois da Otimização
- Tamanho médio: ~150KB por imagem (70% menor)
- Formato: WebP com fallback JPG
- Cache: 1 ano com immutable
- Lazy loading: Automático

## Troubleshooting

### Imagem não carrega
1. Verifique se o arquivo existe
2. Confirme que o caminho está correto
3. Execute `npm run optimize:images`
4. Limpe o cache: `rm -rf .next`

### Qualidade ruim
1. Aumente a qualidade no script (85 → 90)
2. Use o original como fallback
3. Considere usar AVIF para melhor qualidade

### Build lento
1. Otimize imagens localmente antes do build
2. Use `sharp` em produção
3. Configure CDN para servir imagens

## Monitoramento

Use o Lighthouse para verificar:
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Image optimization score

Meta: 90+ no Performance Score
