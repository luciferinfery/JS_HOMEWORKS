const createCandidate = function (name, skills) {
  return {
    name,
    skills,
  };
};

const requirementArr = [];
const addRequirement = function (requirement) {
  requirementArr.push(requirement);
};
const conductInterview = function (candidate, requirements) {
  requirementsLoop: for (let i = 0; i < requirements.length; i += 1) {
    for (let j = 0; j < candidate.skills.length; j += 1) {
      if (candidate.skills[j] === requirements[i]) {
        continue requirementsLoop;
      }
    }
    return false;
  }
  return true;
};

const estFunc = function (candidate, requirements) {
  if (candidate.skills.length > requirements.length) {
    return 100;
  }
  return Math.round((candidate.skills.length / requirements.length) * 100);
};

const planInterview = function (candidates, requirements, estimateFunction) {
  const result = [];
  for (let i = 0; i < candidates.length; i += 1) {
    const score = estimateFunction(candidates[i], requirements);
    result.push({ candidate: candidates[i], score });
  }
  return result;
};

const skills = ['Java', 'Python', 'Node.js', 'Ruby'];
const candidate = createCandidate('Anna', skills);

console.log(candidate);
addRequirement('Ruby');
addRequirement('Python');
addRequirement('Java');
addRequirement('Node.js');

console.log(requirementArr);
console.log(conductInterview(candidate, requirementArr));

console.log(planInterview([candidate], requirementArr, estFunc));
