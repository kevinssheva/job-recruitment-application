import { useState, useEffect } from "react";
import axios from "axios";

const response = [
  {
    job_id: "37QmCYhsRONU67ceAAAAAA==",
    employer_name: "Collabera",
    employer_logo:
      "https://collabera.com/wp-content/uploads/2022/06/Mask-group-2.svg",
    employer_website: "http://www.collabera.com",
    employer_company_type: "Computer Services",
    job_publisher: "LinkedIn",
    job_employment_type: "CONTRACTOR",
    job_title: "Python Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/python-developer-at-collabera-3906621384",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6105,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/python-developer-at-collabera-3906621384",
        is_direct: false,
      },
    ],
    job_description:
      "Must haves: • Previous Application Programming/Development experience designing, developing and deploying high-volume, multi-tiered, distributed transactional applications. • Deep knowledge of Python Django Framework • Deep knowledge of Angular, ES6/HTML5/CSS3 • Strong knowledge of MySQL databases • Deep understanding of Git version control system • Strong understanding of unit testing frameworks • Experience working in Agile development process and good understanding of various phases of Software Development Lifecycle • Experience in data access technologies and patterns • Relational database experience and proven abilities in SQL and data modeling is required. Must be aware of SQL Objects, query optimization, and join conditions. • Experience with component based web application frameworks • Conceptual understanding of Object Oriented Programming and SOLID design principles. • Ability to communicate, written and verbal, with technical and non-technical cross-functional teams • .NET Core , Jenkins, MSBuild, Ansible, XLR, Automated testing",
    job_is_remote: false,
    job_posted_at_timestamp: 1713789734,
    job_posted_at_datetime_utc: "2024-04-22T12:42:14.000Z",
    job_city: "Plano",
    job_state: "TX",
    job_country: "US",
    job_latitude: 33.019844,
    job_longitude: -96.69888,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=37QmCYhsRONU67ceAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: "2024-05-22T12:41:39.000Z",
    job_offer_expiration_timestamp: 1716381699,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: true,
      degree_mentioned: false,
      degree_preferred: false,
      professional_certification_mentioned: false,
      job_experience_in_place_of_education: false,
    },
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: [
      "Previous Application Programming/Development experience designing, developing and deploying high-volume, multi-tiered, distributed transactional applications",
      "Deep knowledge of Python Django Framework",
      "Deep knowledge of Angular, ES6/HTML5/CSS3",
      "Strong knowledge of MySQL databases",
      "Deep understanding of Git version control system",
      "Strong understanding of unit testing frameworks",
      "Experience working in Agile development process and good understanding of various phases of Software Development Lifecycle",
      "Experience in data access technologies and patterns",
      "Relational database experience and proven abilities in SQL and data modeling is required",
      "Must be aware of SQL Objects, query optimization, and join conditions",
      "Experience with component based web application frameworks",
      "Conceptual understanding of Object Oriented Programming and SOLID design principles",
      "Ability to communicate, written and verbal, with technical and non-technical cross-functional teams",
      ".NET Core , Jenkins, MSBuild, Ansible, XLR, Automated testing",
    ],
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_naics_code: "541511",
    job_naics_name: "Custom Computer Programming Services",
    job_occupational_categories: null,
  },
  {
    job_id: "p1-jGSG68qVtxL-QAAAAAA==",
    employer_name: "Verdant Infotech Solutions",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJ6hHVsNfNYSHOGP2hFaf-k9G50C4ovK6T2Av&s=0",
    employer_website: null,
    employer_company_type: null,
    job_publisher: "LinkedIn",
    job_employment_type: "FULLTIME",
    job_title: "Python Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/python-developer-at-verdant-infotech-solutions-3907092982",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.639,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/python-developer-at-verdant-infotech-solutions-3907092982",
        is_direct: false,
      },
      {
        publisher: "Dive Into Python",
        apply_link: "https://diveintopython.org/jobs/python-developer-8406",
        is_direct: false,
      },
      {
        publisher: "Monster",
        apply_link:
          "https://www.monster.com/job-openings/python-developer-copper-canyon-tx--e551bd20-84b9-45c8-8307-17d7b90203bb",
        is_direct: false,
      },
      {
        publisher: "Adzuna",
        apply_link: "https://www.adzuna.com/details/4660003760",
        is_direct: false,
      },
      {
        publisher: "Resume-Library.com",
        apply_link:
          "https://www.resume-library.com/feed/click/551/148413873?dpj=yes",
        is_direct: true,
      },
    ],
    job_description:
      "Python Developer (Two different level jobs based off experience) Wells Fargo Onsite in Plano, Texas from Day 1 for 3 times a week. 6m+ GC,USC Video Interview Needs Python Api's Ansible App Dev profiles Project Client is building a brand new data center. This team falls under the Devops umbrella, however there is no devops needed. The Python app developer will be doing new development and automation of on prem processes. Looking for strong object orientation and class based programming | , 5208 Windsor Ln, Copper Canyon, Texas, 75077",
    job_is_remote: false,
    job_posted_at_timestamp: 1713721846,
    job_posted_at_datetime_utc: "2024-04-21T17:50:46.000Z",
    job_city: "Copper Canyon",
    job_state: "TX",
    job_country: "US",
    job_latitude: 33.095955,
    job_longitude: -97.09668,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=p1-jGSG68qVtxL-QAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: "2024-05-21T17:50:11.000Z",
    job_offer_expiration_timestamp: 1716313811,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: true,
      degree_mentioned: false,
      degree_preferred: false,
      professional_certification_mentioned: false,
      job_experience_in_place_of_education: false,
    },
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Python",
        "Looking for strong object orientation and class based programming",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "lLZWx16w9_ZQ4Zw1AAAAAA==",
    employer_name: "RxLogixx Corporation",
    employer_logo: null,
    employer_website: null,
    employer_company_type: null,
    job_publisher: "LinkedIn",
    job_employment_type: "FULLTIME",
    job_title: "Python Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/python-developer-at-rxlogixx-corporation-3903641206",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6286,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/python-developer-at-rxlogixx-corporation-3903641206",
        is_direct: false,
      },
    ],
    job_description:
      "Company Description ITMC SOLUTIONS is a leading provider of Pharmacovigilance (PV) technology solutions, applying cutting-edge technology advances like machine learning and artificial intelligence. The company has been selected by the FDA to replace their legacy FAERS signaling system with RxLogix PV Surveillance Suite Platform. RxLogix works with pharmacovigilance and risk management professionals to ensure patient safety and increase compliance, productivity, and quality in the drug safety value chain. Based in Noida, India, RxLogix is known for its defiant bold thinking and proactive pursuit of innovative solutions. Role Description This is a full-time on-site role for a Python Developer at RxLogix Corporation in Noida. The Python Developer will be responsible for back-end web development, software development, object-oriented programming (OOP), programming, and databases. The role will involve day-to-day tasks such as developing and maintaining Python-based applications, participating in code reviews and testing, collaborating with cross-functional teams, and troubleshooting and debugging applications. NOTE : • Need immediated joiners. • Only freshers is required. • Salary - $ 105K annually Qualifications • Experience in back-end web development, software development, and object-oriented programming (OOP) • Strong programming skills, particularly in Python • Proficiency in working with databases • Knowledge of software development best practices • Strong problem-solving and analytical skills • Ability to work well in a team and collaborate with cross-functional teams • Excellent written and verbal communication skills • Bachelor's degree in Computer Science or related field",
    job_is_remote: false,
    job_posted_at_timestamp: 1713752892,
    job_posted_at_datetime_utc: "2024-04-22T02:28:12.000Z",
    job_city: "Dallas",
    job_state: "TX",
    job_country: "US",
    job_latitude: 32.776665,
    job_longitude: -96.79699,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=lLZWx16w9_ZQ4Zw1AAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: "2024-10-19T02:26:33.000Z",
    job_offer_expiration_timestamp: 1729304793,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: {
      0: "Python (Programming Language)",
      1: "Object-oriented Languages",
      2: "Back-End Web Development",
      3: "Object-Oriented Programming (OOP)",
      4: "Cascading Style Sheets (CSS)",
      5: "Databases",
      6: "JSON",
      7: "MongoDB",
      8: "Django",
      9: "HTML5",
    },
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: true,
      degree_mentioned: true,
      degree_preferred: true,
      professional_certification_mentioned: false,
      job_experience_in_place_of_education: false,
    },
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Only freshers is required",
        "Experience in back-end web development, software development, and object-oriented programming (OOP)",
        "Strong programming skills, particularly in Python",
        "Proficiency in working with databases",
        "Knowledge of software development best practices",
        "Strong problem-solving and analytical skills",
        "Ability to work well in a team and collaborate with cross-functional teams",
        "Excellent written and verbal communication skills",
        "Bachelor's degree in Computer Science or related field",
      ],
      Responsibilities: [
        "The Python Developer will be responsible for back-end web development, software development, object-oriented programming (OOP), programming, and databases",
        "The role will involve day-to-day tasks such as developing and maintaining Python-based applications, participating in code reviews and testing, collaborating with cross-functional teams, and troubleshooting and debugging applications",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
];

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "8477dbd98emshd151b292aed1bb7p1885bfjsn203415611dad",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // if (endpoint === "search") setData(response);
      // else setData(response.slice(2, 3));
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
