import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function BannerBlog() {
    let spanStyle = {color: 'rgba(28, 42, 61, 1)', fontWeight: '600'};
    return (
        <>
            <div className="container-fluid p-0" id="banner-section">
                <div className="banner-blog">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="banner-heading">Our Blogs</h1>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.collapse:not(.show)').css('display', function(index, value) {
            return value === 'none' ? 'block' : 'none'; // Toggles between 'block' and 'none'
        });
    });
});
