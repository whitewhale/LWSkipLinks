# LWSkipLinks

Dynamically add skip links depending on the page content. Shows skip links on focus for screen readers/keyboard users.

## USAGE:
*  Call the function on the element or multiple elements that you want to link to.
*  Pass the link id and the link name.
*  Run the function after the window load event so all elements are already on the page.


## Example

```
    // Wait until all elements are on the page before adding skip links (wait for calendar to load etc.)
    $(window).on('load', function() {

      // Add skip link pointing to sidebar navigation
      $('.side-nav').addSkipLink('#skip-to-side-nav', 'Sidebar Navigation');

      // Add skip link pointing to start of main page content
      // This is different for each template
      $('.plain-page-intro, .profiles-page-title, .news-page-title, .lw_cal_header_title').addSkipLink('#skip-to-main', 'Main Content');
    });
```

Remember to also include a "Back to Top" link in the site footer (no need to use the plugin for that since it's the same on every template).
