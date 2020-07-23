export default class Concept {
  readonly category: string;

  readonly title: string;

  readonly details: string | undefined;

  constructor(category: string, title: string, details: string | undefined = undefined) {
    this.category = category;
    this.title = title;
    this.details = details;
  }

  sameAs(concept: Concept) {
    return (
      this.category === concept.category
      && this.title === concept.title
      && this.details === concept.details
    );
  }
}
