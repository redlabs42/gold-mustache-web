import type ptBR from "@/i18n/locales/pt-BR";

type Messages = typeof ptBR;

declare global {
  interface IntlMessages extends Messages {}
}
