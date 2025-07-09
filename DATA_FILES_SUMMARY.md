# Data Files Summary

This document outlines all data files in the portfolio/blog and their usage across components.

## 📁 Data Files Structure

### 1. **experienceData.js** ✅ **POPULATED & USED**
**Location:** `blog/data/experienceData.js`
**Structure:**
```javascript
{
  title: 'Job Title',
  company: 'Company Name',
  location: 'City, Country',
  range: 'Month Year - Present',
  startYear: 2023,
  endYear: null, // null for ongoing
  startMonth: 'July',
  endMonth: null, // null for ongoing
  url: 'https://company.com',
  description: 'Role description for Timeline component',
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ]
}
```

**Used in:**
- `blog/pages/journey.js` - Timeline slider
- `blog/pages/current-work.js` - Current job info
- `blog/layouts/AuthorLayout.js` - About page Timeline

**Note:** Contains only full-time positions. Internships are in `internshipData.js`

---

### 2. **internshipData.js** ✅ **POPULATED & USED**
**Location:** `blog/data/internshipData.js`
**Structure:**
```javascript
{
  title: 'Intern Title',
  company: 'Company Name',
  location: 'City, Country',
  range: 'Month Year - Month Year',
  startYear: 2024,
  endYear: 2024,
  startMonth: 'June',
  endMonth: 'August',
  url: 'https://company.com',
  description: 'Internship description',
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ]
}
```

**Used in:**
- `blog/pages/journey.js` - Timeline slider

---

### 3. **educationData.js** ✅ **POPULATED & USED**
**Location:** `blog/data/educationData.js`
**Structure:**
```javascript
{
  institution: 'University Name',
  degree: 'Degree Type',
  range: 'Year - Year',
  startYear: 2019,
  endYear: 2023,
  startMonth: 'August',
  endMonth: 'May',
  location: 'City, State',
  gpa: '9.06/10.0',
  grade: 'A'
}
```

**Used in:**
- `blog/pages/journey.js` - Timeline slider

---

### 4. **projectsData.js** ✅ **POPULATED & USED**
**Location:** `blog/data/projectsData.js`
**Used in:**
- `blog/pages/projects.js` - Projects page
- `blog/pages/index.js` - Homepage projects section

---

### 5. **blogsData.js** ✅ **POPULATED & USED**
**Location:** `blog/data/blogsData.js`
**Used in:**
- `blog/pages/blogs.js` - Blogs page
- `blog/pages/index.js` - Homepage latest articles

---

### 6. **quotesData.js** ✅ **POPULATED & USED**
**Location:** `blog/data/quotesData.js`
**Used in:**
- `blog/pages/quotes.js` - Quotes page

---

### 7. **opensourceData.js** ⚠️ **EMPTY TEMPLATE**
**Location:** `blog/data/opensourceData.js`
**Structure:**
```javascript
{
  project: 'Project Name',
  organization: 'Org Name',
  url: 'https://github.com/org/project',
  contributionType: 'Code/Docs/Design/etc.',
  date: 'Month Year',
  description: 'Short description of your contribution.',
  highlights: [
    'Highlight 1',
    'Highlight 2'
  ]
}
```

**Status:** Template only - needs to be populated with actual data
**Usage:** Not currently used in any component

---

### 8. **hackathonData.js** ⚠️ **EMPTY TEMPLATE**
**Location:** `blog/data/hackathonData.js`
**Structure:**
```javascript
{
  name: 'Hackathon Name',
  event: 'Event/Organization',
  location: 'City, Country or Remote',
  date: 'Month Year',
  url: 'https://hackathon.com',
  project: 'Project Name',
  description: 'Short description of your project or achievement.',
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ]
}
```

**Status:** Template only - needs to be populated with actual data
**Usage:** Not currently used in any component

---

## 🔄 Data Consistency

### ✅ **Consistent Usage:**
1. **experienceData.js** - Used consistently across Journey, Current Work, and About pages
2. **internshipData.js** - Now imported and used in Journey page (was previously hardcoded)
3. **educationData.js** - Used in Journey page
4. **projectsData.js** - Used in Projects page and homepage
5. **blogsData.js** - Used in Blogs page and homepage
6. **quotesData.js** - Used in Quotes page

### ⚠️ **Needs Attention:**
1. **opensourceData.js** - Empty template, not used anywhere
2. **hackathonData.js** - Empty template, not used anywhere

---

## 📝 Key Updates Made

1. **Moved hardcoded internship data** from `journey.js` to `internshipData.js`
2. **Added descriptions** to all experience entries in `experienceData.js`
3. **Updated Timeline component** to display descriptions and achievements properly
4. **Ensured consistent data structure** across all experience-related data
5. **Removed duplicate internship entries** from `experienceData.js` to prevent duplication in Journey page

---

## 🎯 Next Steps

1. **Populate opensourceData.js** with actual open source contributions (if any)
2. **Populate hackathonData.js** with actual hackathon participation (if any)
3. **Create components** to display open source and hackathon data if needed
4. **Add any missing data** to existing files as needed

---

## 📋 Data File Checklist

- [x] experienceData.js - ✅ Populated & Used
- [x] internshipData.js - ✅ Populated & Used  
- [x] educationData.js - ✅ Populated & Used
- [x] projectsData.js - ✅ Populated & Used
- [x] blogsData.js - ✅ Populated & Used
- [x] quotesData.js - ✅ Populated & Used
- [ ] opensourceData.js - ⚠️ Empty template
- [ ] hackathonData.js - ⚠️ Empty template

---

## 🔗 Component Usage Summary

| Component | Data Files Used |
|-----------|----------------|
| About Page (AuthorLayout) | experienceData.js |
| Journey Page | experienceData.js, educationData.js, internshipData.js |
| Current Work Page | experienceData.js |
| Projects Page | projectsData.js |
| Blogs Page | blogsData.js |
| Quotes Page | quotesData.js |
| Homepage | projectsData.js, blogsData.js |

All data is now centralized in data files and used consistently across components! 