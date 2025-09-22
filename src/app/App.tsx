import { FilterIcon, SearchIcon } from '@/assets/icons';
import { Input } from '@/components/ui/input';
import { CourseService } from '@/services/course/course.service';
import type { CourseType } from '@/types';
import { BackToTopButton, CourseCard, Footer, Header } from './components';
import './index.css';

const App = () => {
  const courses: CourseType[] = CourseService.getCourses();
  return (
    <div className='relative'>
      <Header />
      <div className='flex flex-col p-4 md:p-8 xl:px-20 xl:py-9'>
        <p className='mb-7 text-6xl font-medium text-white xl:text-2xl'>
          Course Catalog
        </p>
        <p className='text-md mb-9 font-semibold text-white xl:w-4/5 xl:text-lg'>
          We empower visionary developers with a suite of powerful tools,
          enabling them to build the essential applications of tomorrow.
        </p>
        <div className='flex flex-col md:flex-row'>
          <div className='bg-light-black focus-within:ring-shade-03 mb-4 flex flex-row items-center rounded-lg px-4 py-0.5 focus-within:ring-2 md:mb-0 md:w-full xl:px-8 xl:py-4'>
            <SearchIcon className='text-gray h-[14px] hover:cursor-pointer md:me-4 xl:me-6 xl:h-7' />
            <Input
              className='bg-light-black dark:bg-light-black w-full rounded-s-none border-0 text-white placeholder:font-semibold focus-visible:ring-0 xl:text-lg xl:placeholder:text-lg'
              type='search'
              placeholder='Search course'
            />
          </div>

          <button className='bg-light-black inline-flex w-fit flex-row items-center gap-2 rounded-lg px-4 py-[5px] hover:cursor-pointer hover:bg-[#303136] md:ms-8 md:max-h-fit xl:max-h-full xl:gap-4 xl:py-[10px]'>
            <FilterIcon className='h-3.5 text-white xl:h-7' />
            <p className='text-md text-white xl:text-lg'>Filter</p>
          </button>
        </div>
        <div className='mt-4 grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-2 xl:mt-8 xl:grid-cols-3'>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              level={course.level}
              duration={course.duration}
              lectures={course.lectures}
            />
          ))}
        </div>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default App;
