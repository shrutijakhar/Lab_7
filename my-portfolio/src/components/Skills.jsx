

import React, { useState } from 'react';

const skillsData = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'SQL', category: 'Database' },
];

export default function Skills() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(skill.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="skills-search"
      />

      <div className="skills-filters">
        {['Frontend', 'Backend', 'Database'].map(cat => (
          <label key={cat} className="skills-filter-label">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
              className="skills-checkbox"
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map(skill => (
          <div key={skill.name} className={`skill-card skill-${skill.category.toLowerCase()}`}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
