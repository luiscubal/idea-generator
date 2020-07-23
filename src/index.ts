import Concept from './concept';
import { clearChildren } from './utils';
import generateIdea, { getNumAvailableConcepts } from './idea-generator';
import { numConceptsToMix, numIdeas } from './config';

const ideaContainer = document.getElementById('idea-container')!;
const retryElement = document.getElementById('retry')!;
const javascriptNoticeElement = document.getElementById('javascript-note')!;
const numConceptsElement = document.getElementById('num-concepts')!;
const numIdeasElement = document.getElementById('num-ideas')!;

function clearIdea() {
  clearChildren(ideaContainer);
}

function addDomForConcept(elementSet: Element, concept: Concept) {
  const container = document.createElement('div');
  container.classList.add('concept');
  container.classList.add(`category-${concept.category}`);

  const header = document.createElement('h2');
  container.appendChild(header);

  const headerContent = document.createTextNode(concept.title);
  header.appendChild(headerContent);

  elementSet.appendChild(container);
}

function generateIdeaElements() {
  for (let i = 0; i < numIdeas; i += 1) {
    const elementSet = document.createElement('div');
    elementSet.classList.add('idea');

    const concepts = generateIdea(numConceptsToMix);
    concepts.forEach((concept) => {
      addDomForConcept(elementSet, concept);
    });

    ideaContainer.appendChild(elementSet);
  }
}

function generateStatistics() {
  const numConcepts = getNumAvailableConcepts();
  numConceptsElement.innerText = numConcepts.toLocaleString('en');

  // If this gets to 2^53 (9 Peta-ideas) we'll need to switch to BigInt
  let numIdeas = numConcepts;
  for (let i = 1; i < numConceptsToMix; i += 1) {
    numIdeas *= numConcepts - i;
  }

  numIdeasElement.innerText = numIdeas.toLocaleString('en');
}

retryElement.addEventListener('click', () => {
  clearIdea();

  generateIdeaElements();
});
javascriptNoticeElement.parentElement!.removeChild(javascriptNoticeElement);
retryElement.removeAttribute('disabled');

generateIdeaElements();

generateStatistics();
