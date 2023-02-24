<?php
/* Please Do not Edit or Delete CopyRight Info.. 😥🥺 */

/**
 * 
 * * Disclaimer * * 
 * Program may have been modified by a third party to either add extended features, fix errors or add more bugs. I shall not be held responsible for any errors encountered via usage of this program.
 * 
 * Author: Ogar Thankgod Odeh
 * Github: https://github.com/
 * Email: ogarthankgododeh@gmail.com
 * 
 * 
 * Co Authors *
 * 
 * Co-Author: ***********
 * Github: https://github.com/****
 * Email: ********8@***.***
 * 
 * Contact:
 * Telegram: https://t.me/iamcodefreak
 * (¬‿¬)
 * 
 * File Name: Contact.class.php
 **/

namespace Contact;

class Contact
{
  /** @var string $mailto Email to send mail to */
  public $mailto;

  /** @var String $error for tracking single error */
  public $error;

  /** @var String $sanitize should contain the value to be sanitized */
  public $sanitize;

  /** @var String $sanitized should contain the sanitized string */
  public $sanitized;

  /** @var Array $postData Mirror for $_POST */
  public $postData;

  public function __construct()
  {
  }

  /**
   * validate $postData
   *
   * @return Boolean|Object
   **/
  public function validatePost()
  {
    //loop through the submitted form data
    foreach ($this->postData as $key => $value) {
      //create filter to skip check for optional input fields
      $filter = [];

      //if the input field name exist in our filter, 
      if (in_array($key, $filter)) continue;

      //check if any required form data is missing
      if (empty($value)) :
        //Initialize the error variable
        $this->error = "Please fill in required fields!";
      endif;

      //Initialize the string to be sanitized
      $this->sanitize = $value;

      //reBuild the postData array
      //By replacing each $key with the sanitized value
      $this->postData[$key] = $this->sanitize()->sanitized;
    }

    //Return False is error exists
    if (isset($this->error)) return false;

    //Return Object Instance
    return $this;
  }

  /**
   * sanitize and validate strings and integers
   *
   * @return Object
   **/
  public function sanitize()
  {
    //Trim the sanitize variable
    $this->sanitize = trim($this->sanitize);

    //Treat all characters as sting and sanitize
    $this->sanitize = filter_var($this->sanitize, FILTER_SANITIZE_STRING);

    //Assign the sanitized string to the sanitized variable 
    $this->sanitized = $this->sanitize;

    //Return Object Instance
    return $this;
  }
}
