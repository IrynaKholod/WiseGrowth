import React, { useState, useEffect } from 'react';
import { GetAllCourses } from '../../Api/Api.jsx';
import { CoursesList } from '../../components/CoursesList/CoursesList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        const response = await GetAllCourses();
        if (response) {
          setCourses(response.data.courses);
          setIsLoading(false);
        } else {
          console.log('Error: response does not contain results');
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
    
    if (!courses.length) {
      fetchCourses();
    }
  }, [courses.length]);
  

  const indexOfLastCourse = currentPage * perPage;
  const indexOfFirstCourse = indexOfLastCourse - perPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / perPage);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CoursesList courses={currentCourses} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default Courses;
