
import DataTable from 'react-data-table-component';
import useBlogs from "../hooks/useBlogs";

const FeaturedBlogs = () => {
    const [blogs] = useBlogs('');

    
    const featuredBlog = blogs.sort((a, b) => b.longDescription.length - a.longDescription.length);
    const featuredBlogs= featuredBlog.slice(0,9)
   
    const columns = [
        {
            name: 'Serial Number',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Blog Title',
            selector: 'title',
        },
        {
            name: 'Blog Owner',
            selector: 'author',
        },
        {
            name: 'Blog Owner Profile Picture',
            cell: (row) => <img src={row.authorDp}  style={{ width: '50px', borderRadius: '50%' }} />,
        },
    ];

    return (
        <div>
            <div className='my-10'>
                <h2 className='text-3xl font-bold text-center'>Featured Blogs</h2>
            </div>
            <DataTable
                
                columns={columns}
                data={featuredBlogs}
                striped
                highlightOnHover
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20]}
            />
        </div>
    );
};

export default FeaturedBlogs;
