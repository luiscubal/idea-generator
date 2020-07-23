import Concept from './concept';
import availableConcepts from './available-concepts';
import { randomElementOf } from './utils';

function getRandomConcept(): Concept {
  return randomElementOf(availableConcepts);
}

export function getNumAvailableConcepts(): number {
  return availableConcepts.length;
}

export default function generateIdea(numConcepts: number): Concept[] {
  const idea: Concept[] = [];

  while (idea.length < numConcepts) {
    const concept = getRandomConcept();
    if (!idea.some((_concept) => _concept.sameAs(concept))) {
      idea.push(concept);
    }
  }

  return idea;
}
