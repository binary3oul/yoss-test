export type AccordionItem = {
  data: { header: string, text: unknown, icon: string, active: boolean }
};
export type Accordion = {
  data: AccordionItem[]
};