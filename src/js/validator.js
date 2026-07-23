/**
 * Data Validator Module
 * Run-time schema integrity checks for content loaded from JSON databases.
 * Assists student webmasters in finding content issues immediately via browser console warnings.
 */

// Model definitions and their required fields.
const SCHEMAS = {
  faculty: {
    required: ["name", "title", "department", "institution", "email", "photo", "biography"],
    types: {
      name: "string",
      title: "string",
      department: "string",
      institution: "string",
      email: "string",
      photo: "string",
      biography: "string",
      education: "array",
      researchInterests: "array"
    }
  },
  student: {
    required: ["id", "name", "role", "yearStarted", "projectFocus", "email"],
    types: {
      id: "string",
      name: "string",
      role: "string",
      yearStarted: "string",
      projectFocus: "string",
      email: "string",
      linkedin: "string",
      photo: "string"
    }
  },
  alumnus: {
    required: ["id", "name", "degree", "graduationYear", "currentPosition"],
    types: {
      id: "string",
      name: "string",
      degree: "string",
      graduationYear: "string",
      thesisTitle: "string",
      currentPosition: "string",
      linkedin: "string"
    }
  },
  project: {
    required: ["id", "title", "status", "summary", "detailedDescription", "tags"],
    types: {
      id: "string",
      title: "string",
      status: "string",
      summary: "string",
      detailedDescription: "string",
      tags: "array",
      image: "string",
      funding: "string"
    }
  },
  publication: {
    required: ["id", "title", "authors", "journal", "year", "doi", "link"],
    types: {
      id: "string",
      title: "string",
      authors: "string",
      journal: "string",
      volume: "string",
      pages: "string",
      year: "string",
      doi: "string",
      link: "string",
      abstract: "string",
      tags: "array"
    }
  },
  grant: {
    required: ["id", "title", "agency", "duration", "status", "principalInvestigator"],
    types: {
      id: "string",
      title: "string",
      agency: "string",
      grantNumber: "string",
      amount: "string",
      duration: "string",
      status: "string",
      principalInvestigator: "string"
    }
  },
  news: {
    required: ["id", "date", "title", "excerpt", "content"],
    types: {
      id: "string",
      date: "string",
      title: "string",
      excerpt: "string",
      content: "string",
      image: "string",
      link: "string"
    }
  },
  gallery: {
    required: ["id", "url", "caption", "category", "date"],
    types: {
      id: "string",
      url: "string",
      caption: "string",
      category: "string",
      date: "string"
    }
  },
  event: {
    required: ["id", "title", "date", "description", "type"],
    types: {
      id: "string",
      title: "string",
      date: "string",
      time: "string",
      location: "string",
      description: "string",
      type: "string"
    }
  },
  collaborator: {
    required: ["id", "name", "institution", "focus"],
    types: {
      id: "string",
      name: "string",
      institution: "string",
      location: "string",
      website: "string",
      logo: "string",
      focus: "string"
    }
  }
};

/**
 * Validates a loaded data object or list against its schema.
 * @param {string} schemaName - Name of the schema definitions (e.g. 'student')
 * @param {Object|Array} data - The raw data object or array loaded from JSON
 * @returns {boolean} - True if validation passed perfectly, False if errors/warnings occurred.
 */
export function validateData(schemaName, data) {
  const schema = SCHEMAS[schemaName];
  if (!schema) {
    console.error(`[Validator Error] Unknown schema identifier requested: "${schemaName}"`);
    return false;
  }

  let passed = true;

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const identifier = item.id || item.name || `Index ${index}`;
      if (!validateSingleItem(schemaName, schema, item, identifier)) {
        passed = false;
      }
    });
  } else if (data && typeof data === 'object') {
    // Single object (e.g., faculty)
    const identifier = data.name || 'Root PI';
    passed = validateSingleItem(schemaName, schema, data, identifier);
  } else {
    console.warn(`[Validation Warning] Expected object or array for schema "${schemaName}", got ${typeof data}`);
    passed = false;
  }

  return passed;
}

/**
 * Checks a single item against required fields and types.
 */
function validateSingleItem(schemaName, schema, item, identifier) {
  let passed = true;

  // Check required keys
  schema.required.forEach(key => {
    if (!(key in item) || item[key] === undefined || item[key] === null || item[key] === "") {
      console.warn(`[Validation Warning] [Schema: ${schemaName}] Item "${identifier}" is missing required field: "${key}"`);
      passed = false;
    }
  });

  // Check types for existing fields
  Object.keys(item).forEach(key => {
    if (key === "$schema") return; // Ignore schema link property

    const expectedType = schema.types[key];
    const actualValue = item[key];

    if (expectedType) {
      const actualType = Array.isArray(actualValue) ? "array" : typeof actualValue;
      if (actualType !== expectedType && actualValue !== null && actualValue !== "") {
        console.warn(`[Validation Warning] [Schema: ${schemaName}] Item "${identifier}" field "${key}" expected type "${expectedType}", got "${actualType}"`);
        passed = false;
      }
    }
  });

  // Date format checks for date fields
  if (item.date && typeof item.date === 'string') {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(item.date)) {
      console.warn(`[Validation Warning] [Schema: ${schemaName}] Item "${identifier}" has invalid date format "${item.date}". Use YYYY-MM-DD.`);
      passed = false;
    }
  }

  return passed;
}
