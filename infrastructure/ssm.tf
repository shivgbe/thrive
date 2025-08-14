resource "aws_ssm_parameter" "secret_message" {
  name  = "/takehome/SECRET_MESSAGE"
  type  = "String"
  value = var.secret_message_value
}