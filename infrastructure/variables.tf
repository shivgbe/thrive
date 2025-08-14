variable region {
    type    = string
    default = "us-east-1"
}

variable "cluster_name" {
  type        = string
  default     = "takehome-eks-cluster"
}

variable "node_instance_type" {
  type        = string
  default     = "t3.small"
}

variable "desired_capacity" {
  type        = number
  default     = 2
}

variable "secret_message_value" {
  type        = string
  default     = "CHANGE_ME"
}