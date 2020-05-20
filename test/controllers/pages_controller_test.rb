require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get first" do
    get pages_first_url
    assert_response :success
  end

  test "should get second" do
    get pages_second_url
    assert_response :success
  end

  test "should get video" do
    get pages_video_url
    assert_response :success
  end

  test "should get audio" do
    get pages_audio_url
    assert_response :success
  end

end
