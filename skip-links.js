/****************************************************************************
 *
 *  Skip Links Plugin for Web Accessibility
 *  ----------------------------------------
 *  Author: @nroyall @whitewhale
 *  Docs: https://github.com/whitewhale/LWSkipLinks
 *  Licensed under the MIT license
 *
 *  Dynamically add skip links depending on the page content.
 *  Shows links on focus for screen readers/keyboard users.
 *
 *  USAGE:
 *  Call the function on the element or multiple elements that you want to link to.
 *  Pass the link id and the link name.
 *  Run the function after the window load event so all elements are already on the page.
 *
 *  Remember to also include a "Back to Top" link in the site footer.
 *  (no need to use the plugin for that since it's the same on every template).
 *
 ****************************************************************************
 */

;(function($) {

  $.fn.addSkipLink = function( linkID, linkName ) {

    // Get the ID without the hash
    var linkHash = linkID.replace(/^#/, '');

    // Get the site header and footer
    var $header = $('.site-header');
    var $footer = $('.site-footer');

    // For each destination element
    $(this).each( function() {

      var $destination = $(this);

      // UNCOMMENT TO DEBUG ----------------------------------------------
      // if ( !$('#'+linkHash).length && $destination.length ) {
      //   console.log('Adding skip destination to '+$destination.attr('class'));
      // }
      // else if ( $('#'+linkHash).length && $destination.length ) {
      //   console.log(linkName+' skip link was already added. Could not add another link to '+$destination.attr('class'));
      // }
      // else if ( !$destination.length ) {
      //   console.log('Skip destination does not exist: '+$destination.attr('class'));
      // }
      // END DEBUG CODE --------------------------------------------------


      // If this skip link hasn't already been added for another element
      // And if the destination elements exists
      if ( !$('#'+linkHash).length && $destination.length ) {

        // Add the skip destination element
        // (add a new element in case the destination already has an ID)
        $destination.prepend('<span id="'+linkHash+'" class="skip-to-destination sr-only">'+linkName+'</span>');

        // Then add a skip link to the page header and footer
        var skipLink = '<a href="'+linkID+'" class="skip-to-link">Skip to '+linkName+'</a>';

        $header.prepend($(skipLink));
        $footer.append($(skipLink));
      }
    });
  };

})(livewhale.jQuery);






